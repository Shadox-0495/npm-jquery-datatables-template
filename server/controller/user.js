const getAll = async (req, res) => {
	const data = await Logs.findAll({ raw: true });
	res.send(data);
};

const getByID = async (req, res) => {
	const query = req.query;
	let data = null;

	if (query && query.type == "Order") {
		data = await Logs.findAll({
			where: {
				OrderID: req.params.ID,
			},
		});
	} else {
		data = await Logs.findByPk(req.params.ID);
	}

	if (data == null) {
		res.status(404).send("Couldn't find the record by that ID");
		return;
	}

	res.status(200).send(data);
};

const create = (req, res) => {
	const { orderId, timeStamp, userName, statusId, description } = req.body;
	try {
		Logs.create({ orderId, timeStamp: date.format(timeStamp ? timeStamp : new Date(), "YYYY-MM-DD HH:mm:ss"), userName, statusId, description: description ?? "" });
		res.status(200).send("New record created");
	} catch (err) {
		res.status(404).send(`Error creating new record in status: ${err}`);
	}
};

const update = async (req, res) => {
	const { ID, orderId, userName, statusId, description } = req.body;
	try {
		await Logs.update(
			{ orderId, userName, statusId, description: description ?? "" },
			{
				where: {
					ID,
				},
			}
		);
		res.status(200).send("Record updated");
	} catch (err) {
		res.status(404).send(`Error updating record in status: ${err}`);
	}
};

const _delete = async (req, res) => {
	const { ID } = req.query;
	const data = await Logs.destroy({
		where: {
			ID,
		},
	});
	if (data == null) res.status(404).send("Record not found.");
	res.status(200).send("Record deleted");
};

export default { getAll, getByID, create, update, _delete };
