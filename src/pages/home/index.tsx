import { Button, Switch } from "antd";
function Home() {
	return (
		<>
			<h1>Home</h1>
			<Button type="primary">Happy Work</Button>
			<Switch />
			<div style={{ height: "100vh" }}></div>
			<p>这是首页</p>
		</>
	);
}

export default Home;
