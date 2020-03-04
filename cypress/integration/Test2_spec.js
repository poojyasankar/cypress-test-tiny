import * as CommonCommands from "../support/CommonCommands";
import * as ViewCommands from "../support/ViewCommands";
import * as globals from '../support/commands';

describe('Routine Production Test 3', ()=>{
    beforeEach(function () {
        cy.visit('https://3d.connect.trimble.com');
        CommonCommands.clickElement('.button');
        CommonCommands.clickElement('[title="Accept Cookies"]');
      })

      it('ConnectTest2',()=>{
        CommonCommands.assertElementShould('div.trimble-splashscreen-banner','not.exist');
        CommonCommands.loadProject('SketchUp');  
      })
})