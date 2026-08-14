export default cachedEventHandler(
  async () => {
    const config = useRuntimeConfig();

    const query = `
      query($username: String!) {
        user(login: $username) {
          followers {
            totalCount
          }

          following {
            totalCount
          }

          repositories(
            first: 100
            ownerAffiliations: OWNER
            privacy: PUBLIC
          ) {
            totalCount

            nodes {
              stargazerCount
            }
          }

          contributionsCollection {
            contributionCalendar {
              totalContributions
              colors

              months {
                name
                firstDay
                totalWeeks
                year
              }

              weeks {
                firstDay

                contributionDays {
                  date
                  contributionCount
                  color
                  weekday
                  contributionLevel
                }
              }
            }
          }
        }
      }
    `;

    const response = await $fetch<{
      data: {
        user: {
          followers: {
            totalCount: number;
          };

          following: {
            totalCount: number;
          };

          repositories: {
            totalCount: number;
            nodes: {
              stargazerCount: number;
            }[];
          };

          contributionsCollection: {
            contributionCalendar: any;
          };
        };
      };
    }>("https://api.github.com/graphql", {
      method: "POST",

      headers: {
        Authorization: `Bearer ${config.githubToken}`,
        "Content-Type": "application/json",
      },

      body: {
        query,

        variables: {
          username: config.githubUsername,
        },
      },
    });

    const user = response.data.user;

    // Calculate total stars from all public repositories
    const totalStars = user.repositories.nodes.reduce(
      (total, repository) => total + repository.stargazerCount,
      0,
    );

    return {
      ...user.contributionsCollection.contributionCalendar,

      stats: {
        following: user.following.totalCount,
        repositories: user.repositories.totalCount,
        stars: totalStars,
        followers: user.followers.totalCount,
      },
    };
  },

  {
    maxAge: 60 * 60,
    name: "github-contributions",
  },
);
