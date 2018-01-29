import Container from '@/pages/product'
import Detail from '@/pages/product/detail'
import List from '@/pages/product/list'
export default {
	path: '/product',
	component: Container,
  name: 'product-index',
	children: [{
		path: ':id',
		name: 'product-detail',
		component: Detail
	}, {
		path: 'list/:id',
		name: 'product-list',
		component: List
	}]
}
