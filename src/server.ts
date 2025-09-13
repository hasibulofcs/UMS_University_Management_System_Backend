import mongoose from "mongoose";
import { envConfigs } from "./app/config";
import app from "./app";
import colors from "colors";

async function main() {
  const dbUrl = envConfigs.database_url
    ?.replace("<USER>", envConfigs.user as string)
    ?.replace("<PASSWORD>", envConfigs.password as string);

  try {
    await mongoose.connect(dbUrl as string);

    console.log(
      colors.green(
        `Database connected successfully at ${mongoose.connection.host}, ${mongoose.connection.port}`
      )
    );

    app.listen(envConfigs.port, () => {
      console.log(`Server is running at port ${envConfigs.port}`);
    });
  } catch (error) {
    console.log(dbUrl);
    console.error(error);
  }
}

main();
