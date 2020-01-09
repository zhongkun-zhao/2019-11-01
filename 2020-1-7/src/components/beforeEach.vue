<template>
   
<div id="nav">
<h2>beforeEach</h2>
<hr>
<router-link tag="button" to="/b1">b1</router-link>
<router-link tag="button" to="/b2">b2</router-link>
<hr>
<router-link tag="button" to="/foo">Foo</router-link>
<router-link tag="button" to="/foo/2">foo2</router-link>
<hr>
<p>index3</p>
<router-link to="/foo2" tag="button">FOO2</router-link>
<router-link to="/foo3" tag="button">FOO3</router-link>
<router-link to="/foo4" tag="button">FOO4</router-link>
<router-view />
<hr>
<!-- <router-link tag="button" to="/login">login</router-link> -->


</div>
    
    
</template>

<script>
export default {

}
</script>

<style>

</style>