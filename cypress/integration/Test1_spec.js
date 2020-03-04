 import * as CommonCommands from "../support/CommonCommands";
 import * as ViewCommands from "../support/ViewCommands";
 import * as globals from '../support/commands';
 describe('Routine Prod Test', ()=>{    
    before(function () {
      cy.visit('https://3d.connect.trimble.com');
      CommonCommands.clickElement(".button");
      CommonCommands.typeInTextField('#user', 'poojya.sankar@trimble.com');
      CommonCommands.typeInTextField('#password', 'randompassword', false);
      CommonCommands.clickElement('#chkRemember');
      CommonCommands.clickElement('#signin');

    })
    
    beforeEach(function () {
      if(!(cy.url().should('include','3d.connect.trimble.com')))
      {
        cy.visit('https://3d.connect.trimble.com');
        CommonCommands.clickElement('.button');
      }
      CommonCommands.clickElement('[title="Accept Cookies"]');
    })

    it('ConnectTest1', () => {
      
      CommonCommands.assertElementShould('div.trimble-splashscreen-banner','not.exist');
      CommonCommands.loadProject('SuperModel');  
      CommonCommands.loadModel('8614_EMBAOB.ifc');
      CommonCommands.goToTab('Views');
      ViewCommands.createViewGroup('TestViewGroup');
      ViewCommands.createView('1');
      cy.get('.trimble-view-item.enabled').drag('label.group-label');
      ViewCommands.deleteViewGroup();
      cy.wait(500);
      CommonCommands.assertElementShould('div.trimble-workspace-tabs-content.selected > div > div > div.tab-panel-content > div > div:nth-child(1) > div > div > label', 'not.exist');
      CommonCommands.assertElementShould('div.trimble-view-tile-container > div > div > div', 'exist');
      ViewCommands.deleteView('View1');
      cy.wait(500);
    })
})