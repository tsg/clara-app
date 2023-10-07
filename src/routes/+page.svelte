<script lang="ts">
    import type { PageData } from './$types';
   
    export let data: PageData;
</script>

<style>
    body {
        background-color: #cbc3e3;
    }
    .card {
        float: left;
        padding: 20px;
        font-size: 24px;
    }
    .teddy {
        width: 400px;
    }
</style>

<head>
    <title>Clara's homepage</title>
</head>
<body>
    <div class="card">
        <h1>Hi, my name is <i><b>Clara</b></i>!</h1>

        <p>
        My favorite color is <b>purple</b> and my favorite animal is a <b>cat</b>.
        </p>
        <p>
            Come to my playgroup! 😊
        </p>

        <p>
            Write your name here to be in the club:
        </p>
        <form method="POST">
            <input type="text" name="name" placeholder="Your name">
            <input type="submit" value="Enter">
        </form>
        <ul>
            {#each data.friends as friend}
                <li>{friend.name}</li>
            {/each}
        </ul>
        <p>
            The meetings are Monday, Wednesday and Friday at 3pm. <br />The meetings are half an hour.
        </p>
    </div>
    <div class="card">
        <img class="teddy" src="teddy.png" alt="My Teddy Bear"/>
    </div>
</body>
