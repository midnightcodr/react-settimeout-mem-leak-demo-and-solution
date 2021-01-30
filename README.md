# Before running
Open javascript console, click on `Memory`, record a heap snapshot

# To test
Click on button `Foo`, follow by `Add` button, then within 3 seconds click on button `Bar`, this will unmount component <Foo /> before the setTimeout event fires
now take another snapshot, you will see memory are consumed significantly higher than the previous step. Repeat tests a few times, your browser might end up crashing.

# Possible solution
Component <FooA /> demostrate a trick that's used to prevent potential memory leak in the scenario where unmounting a component before an unfinished ajax call that is fired in componentDidMount()