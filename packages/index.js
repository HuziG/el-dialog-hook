import ElModalHook from './Modal';

//按需引入
export { ElModalHook };

const components = [ElModalHook];

const install = (App) => {
	components.forEach((item) => {
		App.component(item.__name, item);
	});
};

export default {
	install,
};
