<script lang="ts">
import * as config from '$lib/config';

</script>

<nav>

    <h2> <a href="/">Shayna Carter:<i>Engineer</i></a></h2>

    <ul class="links">
        <!-- <li>
            <a href="/">Home</a>
        </li> -->
        <li>   
            <a href="/Projects">Portfolio</a>
        </li>
	    <li>
            <a href="/documents/Shayna_Carter_Resume.pdf" target="_blank">Resume</a>
        </li>
        <li>
            <a href="https://linktr.ee/ShaynaSC" target="_blank">Contact</a>
        </li>
       
    </ul>


</nav>

<style>

 nav{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    
    top: 0;
    position: sticky;
    background-color: black;

    border-bottom-style: solid;
    border-bottom-width: 0.1rem;
    border-bottom-color: white;
    font-family: 'Orbit', sans-serif;
     font-size: 1.5rem;
}

.links{
    display: flex;
    flex-direction: row;
    gap: 3rem; 
}

h2{
    color:white;
     padding: 0rem 0rem 0rem .5rem;
}
    a{
color: white;
    padding: 0rem .5rem 0rem 1rem;
    }

    /* For Small screens*/
    @media (max-width: 430px){
nav{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
      font-size: .7rem;
}
	h2 {
		font-size: .7rem;
        text-align: left;
	}


.links{
    display: flex;
    flex-direction: row;
    gap: 0rem; 
  
}

 a{
    padding: 0rem .5rem 0rem 0rem;
    }
   
}

</style>