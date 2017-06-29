import Reast, {Component} from 'react'

class Template extends Component{
	render() {
		return (
			<div>
			<header>
			<h1>ACB Test Header in TemplateJS</h1>
			<main>
			{this.props.children}
			</main>
			</header>
			</div>
		)
	}
}

export default Template