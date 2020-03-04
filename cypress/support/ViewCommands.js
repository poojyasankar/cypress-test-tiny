import * as CommonCommands from "../support/CommonCommands";

export function createView(viewName)
{
    CommonCommands.clickElement('button[title="Add view or view group"]');
    CommonCommands.clickElement('li[value="Add view"]');
    CommonCommands.typeInTextField('.view-name', viewName)
    CommonCommands.clickElement('.button.primary', 'Save');
    CommonCommands.assertElementShould('.button.primary','not.be.visible');
    CommonCommands.clickElement('.close-button[title="Close"]');
}

export function createViewGroup(viewGroupName)
{
    CommonCommands.clickElement('button[title="Add view or view group"]');
    CommonCommands.clickElement('li[value="Add view group"]');
    CommonCommands.typeInTextField('input.text-input', viewGroupName);
    CommonCommands.clickElement('.button.primary', 'Save');
}

export function deleteViewGroup()
{
    CommonCommands.clickElement('div.trimble-workspace-tabs-content.selected > div > div > div.tab-panel-content > div > div:nth-child(1) > div > div > button', undefined, true);
    CommonCommands.clickElement('div.trimble-workspace-tabs-content.selected > div > div > div.tab-panel-content > div > div:nth-child(1) > div > div > div > ul > li:nth-child(2)', undefined, true);
    CommonCommands.clickElement('.button.primary.warning', 'Delete', true);
}

export function deleteView(viewName)
{
    CommonCommands.clickElement('div.trimble-workspace-tabs-content.selected > div > div > div.tab-panel-topbar > button[title="Search"]');
    CommonCommands.typeInTextField('div.trimble-workspace-tabs-content.selected > div > div > div.input-button-group.search.tab-panel-search > input[type=text]', viewName);
    CommonCommands.clickElement('div.trimble-view-tile-container > div > div > div > div > button', undefined, true);
    CommonCommands.clickElement('div.trimble-view-tile-container > div > div > div > div > div > ul > li:nth-child(3)', undefined, true);
    CommonCommands.clickElement('.button.primary.warning', 'Delete', true);
}