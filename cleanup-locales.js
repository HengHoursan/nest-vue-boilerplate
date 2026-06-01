const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'stock-pos-ui', 'src', 'locales');
const files = ['en.json', 'kh.json'];

files.forEach(file => {
  const filePath = path.join(localesDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // Keys to keep in layout
  const layoutKeep = ['adminPanel', 'mainMenu', 'settingsDomain', 'language', 'currency', 'lightMode', 'darkMode', 'settings', 'profile', 'profileDesc', 'security', 'rolePermissions', 'rolePermissionsDesc', 'assignedPermissions', 'activePermissions', 'selectRolePrompt', 'settingsDescription'];
  for (let key in data.layout) {
    if (!layoutKeep.includes(key)) delete data.layout[key];
  }

  // Keys to keep in menu
  const menuKeep = ['dashboard', 'users', 'roles', 'allUsers', 'addUser'];
  for (let key in data.menu) {
    if (!menuKeep.includes(key)) delete data.menu[key];
  }

  // Keys to keep in dashboard
  const dashboardKeep = ['title', 'totalUsers', 'thisMonth', 'noChange', 'settings'];
  for (let key in data.dashboard) {
    if (!dashboardKeep.includes(key)) delete data.dashboard[key];
  }

  // Keys to keep in modules
  const modulesKeep = ['user'];
  for (let key in data.modules) {
    if (!modulesKeep.includes(key)) delete data.modules[key];
  }

  // Keys to keep in fields
  const fieldsKeep = ['name', 'code', 'slug', 'status', 'userAvatar', 'userAvatarHint', 'profileVisibility', 'profileVisibilityDesc', 'description', 'activeStatus', 'statusDescription', 'createdAt', 'updatedAt', 'selectRole', 'emailPlaceholder', 'namePlaceholder', 'filterByStatus'];
  for (let key in data.fields) {
    if (!fieldsKeep.includes(key)) delete data.fields[key];
  }

  // Delete entire sections
  delete data.reports;
  delete data.stock;
  delete data.actions;

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Cleaned ${file}`);
});
