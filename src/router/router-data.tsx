/* eslint-disable import/no-anonymous-default-export */
import Kefu from "../pages/kefu"
import Home from "../pages/index"
import NotFound from "../pages/notfound"
import Login from "../pages/login"
import Detail from "../pages/context"

export default [
  {"pathname":"/", "exact":true,"component":Home,auth: true},
  {"pathname":"/kefu","component":Kefu,auth: true},
  {"pathname":"/detail","component":Detail},

  {"pathname":"/login","component":Login},
  {"pathname":"/404","component":NotFound},
  {"pathname":"*","component":NotFound}
]