
export function clickElement(cssSelector, containsKeyword = undefined, shouldForce = false)
{
    if(containsKeyword && containsKeyword != undefined)
    {
        cy.get(cssSelector).contains(containsKeyword).click({force:shouldForce});
    }
    else
    {
        cy.get(cssSelector).click({force:shouldForce});
    }
}

export function typeInTextField(cssSelector, value, shouldLog = true)
{
    cy.get(cssSelector).type(value, {log: shouldLog});    
}

export function loadProject(projectName)
{
    clickElement('[title="Search"]');
    typeInTextField('input[placeholder="Search for a project"]', projectName);
    cy.get('#list-tile-view').shadowFind('div.media-object-section > div > h4 > span').shadowClick();
    cy.get('span.trimble-workspace-project-name', {timeout:5000}).should('contain', projectName);
}

export function loadModel(modelName)
{
    clickElement('div.trimble-workspace-tabs-content.selected > div > div > div.tab-panel-topbar > button');
    typeInTextField('input[placeholder="Search by name"]', modelName);
    clickElement('.tc-icon-eye-visibility-off-download');
}

export function assertElementShould(cssSelector, assertPhrase)
{
    cy.get(cssSelector,{timeout:5000}).should(assertPhrase);
}

export function goToTab(tabName)
{
    clickElement('[title='+ tabName +']'); 
    cy.get('div.trimble-tab-title-section > span').contains(tabName).should('be.visible');
}