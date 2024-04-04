import { AccountController } from "./controllers/AccountController.js";
import { GiftController } from "./controllers/GiftController.js";
import { GiphyController } from "./controllers/GiphyController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [GiftController, GiphyController],
    view: ''
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])
