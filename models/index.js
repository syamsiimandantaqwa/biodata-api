const { Sequelize } = require("sequelize");

// koneksi ke database
const sequelize = new Sequelize("biodata_api", "root", "", {
	host: "localhost",
	dialect: "mysql"
});

// testing koneksi 
(async () => {
	try {
		await sequelize.authenticate();
		console.log("berhasil terhubung ke database biodata_api");
	}catch (err) {
		console.error("gagal terhubung ke database :", err);
	}
})();

const Users = require("./biodata.model.js")(sequelize);

// sinkronisasi semua model
sequelize.sync()
.then(data => console.log("semua model telah di sinkronisasi ulang "))
.catch(err => console.error(`Gagal saat sinkronisasi semua model : ${err}`))


module.exports = {
	Users,
}