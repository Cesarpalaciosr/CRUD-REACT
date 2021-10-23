const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'CRUD-REACT',
  password: 'masterkey',
  port: 5432,
});

const createMerchant = (body) => {
    return new Promise(function(resolve, reject) {
      const { names, last_name, id, gender } = body
      pool.query('INSERT INTO persona (no_persona, ap_persona, ci_persona, sx_persona ) VALUES ($1, $2, $3,$4)', [names, last_name, id, gender], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`A new merchant has been added added: ${results.rows[0]}`)
      })
    })
  }

const getMerchants = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM merchants ORDER BY id_persona ASC', (error, results) => {
        if (error) {
            reject(error)
        }
        resolve(results.rows);
        })
    }) 
}



const deleteMerchant = () => {
    return new Promise(function(resolve, reject) {
      const id = parseInt(request.params.id)
      pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`Merchant deleted with ID: ${id}`)
      })
    })
}

module.exports = {
    getMerchants,
    createMerchant,
    deleteMerchant,
  }