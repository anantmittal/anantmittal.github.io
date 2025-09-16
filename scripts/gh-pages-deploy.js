const execa = require("execa");
const fs = require("fs");

(async () => {
  try {
    console.log("Git add, commit, and push...");
    await execa("git", ["add", "."]);
    await execa("git", ["commit", "-m", "Update and deploy"]);
    await execa("git", ["push", "origin", "main"]);
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    console.log("Building...");
    await execa("npm", ["run", "build"]);

    const folderName = fs.existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    await execa("rm", ["-r", folderName]);
    await execa("git", ["checkout", "-f", "main"]);
    // await execa('git', ['branch', '-D', 'gh-pages']);
    console.log("Successfully deployed");
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();
