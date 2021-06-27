const Database = require ("../db/config")

module.exports = {
    async create(req, res){
        const db = await Database()
        const pass = req.body.password

        let roomId
        let isRoom = true

        while (isRoom) {
            // Gera o numero da sala
            for(var i = 0; i <6; i++){
                i == 0? roomId = Math.floor(Math.random()*10).toString() :
                roomId += Math.floor(Math.random()*10).toString()
            }

            // verificar se o numero ja existe
            const roomsExistIds = await db.all(`SELECT id FROM rooms`)
        
            isRoom = roomsExistIds.some(roomsExistId => roomsExistId === roomId)

            if(! isRoom){
        
                // Inseri a sala no banco
                        await db.run(`INSERT INTO rooms (
                            id,
                            pass
                        )VALUES (
                            ${parseInt(roomId)},
                            ${pass}
                        )`)
            }
        }
        

        await db.close()

        res.redirect(`/room/${roomId}`)
    }
}