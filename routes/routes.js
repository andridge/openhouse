const house_ctrl = require("./../controllers/house_ctrl");
const user_ctrl = require("./../controllers/user_ctrl");

module.exports = function(express){
    const route = express.Router();


    //
    route.post("/add_user",user_ctrl.save);
    route.get("/all_users",user_ctrl.getAll);
    route.get("/user/:id",user_ctrl.get);
    route.put("/update_user/:id",user_ctrl.update);
    route.delete("/delete_user/:id",user_ctrl.delete);
//

    route.get("/house/:id",house_ctrl.get);
    route.post("/add_house",house_ctrl.save);
    route.delete("/delete_house/:id",house_ctrl.delete);
    route.put("/update_house/:id",house_ctrl.update);
    route.get("/all_houses",house_ctrl.getAll);
    
    return route;
}
//
