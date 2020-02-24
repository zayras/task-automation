/* const { sequelize }  = require('../../models')

let count = 0;

const connectWithRetry = () => {
    console.log("Database connection with retry");
    sequelize.sync().then(() => {
        console.log("Database is connected");
    }).catch(() => {
        console.log(
            "Database connection unsuccessful, retry after 5 seconds. ",
            ++count
          );
          setTimeout(connectWithRetry, 5000);
    })
}

connectWithRetry()

exports.sequelize = sequelize; */