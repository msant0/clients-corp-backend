import mongoose from 'mongoose';
import 'dotenv/config';
import constants from '../helpers/constants'

const connectToDb = async ({ poolSize = 1, databaseUrl = process.env.DATABASE_URL } = {}) => {
  try {
    return mongoose.connect(databaseUrl,
      {
        poolSize,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log(constants.SUCCESSFUL_DATABASE_CONNECTION);
      });
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default connectToDb;