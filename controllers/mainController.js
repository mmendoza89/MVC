let mainController = {
    index: (req,res) => {
        res.render('index');
    },
    detalleMenu: (req,res) => {

        let menus = [
            {
                nombre: 'Carpaccio fresco',
                descripcion: 'Entrada Carpaccio de salmón con cítricos',
                precio: 65
            },
            {
                nombre: 'Risotto de berenjena',
                descripcion: 'ERisotto de berenjena y queso de cabra',
                precio: 47
            },
            {
                nombre: 'Mousse de arroz',
                descripcion: 'Mousse de arroz con leche y aroma de azahar ',
                precio: 27
            },
            {
                nombre: 'Espárragos blancos',
                descripcion: 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
                precio: 37
            }
        ];
        
        res.render('detalleMenu', {title: 'title'});
    }/*,
    findById: (req, res) => {
        const id = req.params.id
    }*/
}

module.exports = mainController;