const { DataTypes } = require("sequelize");

const Biodata = sequelize => {
	// mendefinisikan model untuk biodata 
	const biodataModel = sequelize.define("biodata", {
		nama: {
			type: DataTypes.STRING,
			allowNull: false
		},
		tempat_lahir: {
			type: DataTypes.STRING,
			allowNull: false
		},
		tanggal_lahir: {
			type: DataTypes.STRING,
			allowNull: false
		},
		alamat: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, { timestamps: false });

	return biodataModel;
}


module.exports = Biodata;