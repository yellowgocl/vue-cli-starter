import AccountContainer from '@/pages/account'
import Profile from '@/pages/account/profile'
import Register from '@/pages/account/register'
import Login from '@/pages/account/login'
export default {
	path: '/account/',
	component: AccountContainer,
	children: [{
		path: '',
		name: 'account-index',
		component: Profile,
    meta: { requiredAuth: true }
	}, {
		path: 'register',
		name: 'account-register',
		component: Register
	}, {
		path: 'login',
		name: 'account-login',
		component: Login
	}]
}
