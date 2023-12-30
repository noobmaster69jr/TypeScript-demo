interface component<T> {
  status: T;
}

const navbar: component<string> = {
  status: 'open',
};

console.log(navbar);

interface menuBar<T1, T2> {
  homeButton: T1;
  list: T2[];
}

const menu: menuBar<boolean, string> = {
  homeButton: true,
  list: ['edit', 'view', 'delete'],
};

console.log(menu);
