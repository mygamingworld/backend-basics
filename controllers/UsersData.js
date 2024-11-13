import { Mode } from "../models/Model.js";

// export const data = async (req, res) => {
//     try {
//         const response = await Mode.find({ id: {$gte: 97} });
//         console.log("data is here => => => : ", response);
//         if(response) {
//             res.send({
//                 data: response,
//                 startus: 201
//             })
//         }
//     } catch (error) {
//         console.error("data is not running : => ", error);
//     }
// }


// export const data = async (req, res) => {
//     try {
//         const response = await Mode.find({id: {$lte: 3}});
//         console.log("data is here => => => : ", response);
//         if(response) {
//             res.send({
//                 data: response,
//                 startus: 201
//             })
//         }
//     } catch (error) {
//         console.error("data is not running : => ", error);
//     }
// }


// export const data = async (req, res) => {
//     try {
//         const response = await Mode.find({name: {$eq: "David"}});
//         console.log("data is here => => => : ", response);
//         if(response) {
//             res.send({
//                 data: response,
//                 startus: 201
//             })
//         }
//     } catch (error) {
//         console.error("data is not running : => ", error);
//     }
// }


export const data = async (req, res) => {
    try {
        const response = await Mode.find({$and:[{name:{$eq: "Harsh"}},{name:{$exists: "true"}} ]}).limit(10);
        console.log("data is here => => => : ", response);
        if(response) {
            res.send({
                data: response,
                status: 201
            })
        }
    } catch (error) {
        console.error("data is not running : => ", error);
    }
}


export const updateData = async (req, res) => {
    try {
        const response = await Mode.findOneAndUpdate({id: 3}, req.body, {name: true});
        console.log("data is here => => => : ", response);
        if(response) {
            res.send({
                data: data,
                startus: 201
            })
        }
    } catch (error) {
        console.error("data is not running : => ", error);
    }
}

export const deleteData = async (req, res) => {
        try {
            const response = await Mode.findOneAndDelete({id: {$gte: 30}});
            console.log("delete data is here => : ", response);
        } catch (error) {
            console.error("Data not showing : ", error);
        }
}