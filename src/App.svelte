<script>
    import 'bulma/css/bulma.css'
    import { Button } from 'svelma';
	export let name;
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<div>
    <h1>Hello {name}!</h1>
    <Button type="is-primary">I'm a Button!</Button>
</div>
