const { Users } = require("../models");

// create data
const createData = async (req, res) => {

	const { nama, tempat_lahir, tanggal_lahir, alamat } = req.body;

	if(!nama || !tempat_lahir || !tanggal_lahir || !alamat){
		res.status(400).json({
			message: "maaf, pastikan seluruh data harus terpenuhi"
		});
		return;
	}

	try {
		await Users.create(req.body);
		res.status(201).json({
			success: true,
			message: "Data berhasil di tambahkan",
			data: req.body,
		 })
		return;	
	} catch(err) {
		res.status(500).json({
			success: false,
			error: {
				code: 500,
				message: `Error terjadi saat menambahkan data : ${err}`,
			}
		});
	}
}

// get data
const getData = async (req, res) => {
	try {
		const allUsers = await Users.findAll();
		res.status(200).json({
			success: true,
			message: "berhasil mendapatkan semua data",
			data : allUsers,
		})
		return;
	}catch (err) {
		res.status(500).json({
			success: false,
			error: {
				code: 500,
				message: err.message || "gagal mendapatkan semua data",
			},
		});
	}
}

// update data
const updateData = async (req, res) => {
	const { id } = req.params;
	const { nama, tempat_lahir, tanggal_lahir, alamat } = req.body;

	if(!nama || !tempat_lahir || !tanggal_lahir || !alamat){
		res.status(400).json({
			message: "maaf, pastikan seluruh data harus terpenuhi"
		});
		return;
	}

	try {
		await Users.update(req.body, {
			where: { id },
		});

		res.status(200).json({
			success: true,
			message: "berhasil mengubah data",
			data : req.body,
		});
		return;
	}catch (err) {
		res.status(500).json({
			success: false,
			error: {
				code: 500,
				message: err.message || "gagal mengubah data",
			},
		});
	}

}

// delete data 
const deleteData = async (req, res) => {
	const { id } = req.params;
	try {
		await Users.destroy({
			where: { id }
		});

		res.status(200).json({
			success: true,
			message: "berhasil menghapus data",
		});
		return;
	}catch (err) {
		res.status(500).json({
			success: false,
			error: {
				code: 500,
				message: err.message || "gagal menghapus data",
			},
		});
	}
}

module.exports = {
	createData,
	getData,
	updateData,
	deleteData,
}