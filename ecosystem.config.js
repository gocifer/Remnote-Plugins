module.exports = {
    apps: [
      {
        name: "mermaid plus",
        cwd: "/home/remnote/plugins/mermaid",
        script: "/usr/local/pkg/nvm/versions/node/lts/bin/npm", // npm-cli.js路径
        args: "run dev",
        env: {
            "PORT":"8081",
            "NODE_ENV":"development",
          },
      },
    ],
  };