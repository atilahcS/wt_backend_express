const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


const { Wizard } = require('./models');
const model = require('./models');
app.use('/*', async (req, res) => {
    let transaction = await model.sequelize.transaction();
    try {
        const createdWizard = await Wizard.create({ name: 'woahh' }, { transaction });
        await transaction.commit();
        return res.status(200).json({ model: createdWizard });
    } catch (err) {
        if (transaction.finished != 'commit')
            await transaction.rollback();
        console.log(err);
        return res.status(500).json({ message: 'something went wrong' });
    }
    // return res.status(500).json({ message: 'hello from the other side ~' });
});

app.listen(PORT, () => {
    console.log('=========');
    console.log('YEAHHHHH!');
    console.log('=========');
});