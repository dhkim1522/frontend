const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: '127.0.0.1', 
     user:'root', 
     password: '1022',
     database:'memo',
     connectionLimit: 10
});

module.exports = {
    async run(query, params) {
        return new Promise(resolve => {
            pool.getConnection()
                .then(conn => {
                  conn.query(query, params)
                    .then((rows) => {
                      resolve(rows);  
                      console.log(rows);

                      conn.end();
                    })
                    .catch(err => { 
                      console.log(err); 
                      conn.end();
                    })
                    
                }).catch(err => {
                  //not connected
                  console.log("database is not conected!")
                });
        });
    }
}