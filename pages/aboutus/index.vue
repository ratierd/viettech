<template>
<div class="uk-section uk-section-default" id="content-root">
    <div class="uk-container">
        <h1>About us</h1>
        <br>
        <div class="uk-text-center" id="flexcontainer">
            <div data-editable data-name="author1">
                <h3>Agathe&nbsp;HATCHI</h3>
                <p><i class="uk-text-meta">Writer</i></p>
                <a href="/aboutus/agathehatchi"><img class="uk-preserve-width uk-border-circle" src="/avatar/agathehatchi.jpg" style="height: 150px" alt="avatar" /></a>
            </div>
            <div data-editable data-name="author2">
                <h3>Léa&nbsp;GRIMAL</h3>
                <p><i class="uk-text-meta">Writer</i></p>
                <a href="/aboutus/leagrimal"><img class="uk-preserve-width uk-border-circle" src="/avatar/leagrimal.jpg" style="height: 150px" alt="avatar" /></a>
            </div>
            <div data-editable data-name="author3">
                <h3>David&nbsp;RATIER</h3>
                <p><i class="uk-text-meta">Developer</i></p>
                <a href="/aboutus/davidratier"><img class="uk-preserve-width uk-border-circle" src="/avatar/davidratier.jpg" style="height: 150px" alt="avatar" /></a>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
#flexcontainer {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
</style>