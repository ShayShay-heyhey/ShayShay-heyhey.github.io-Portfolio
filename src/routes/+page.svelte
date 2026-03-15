
<script>
	import portrait from '$lib/assets/Shayna_Portrait_Frame.svg';
	import '$lib/shared-styles.css';
</script>

<main>
<div class="content">
	<img src={portrait} alt="Shayna Carter Portrait" class="portrait" />
	<div class="text">
		<p> I'm Shayna Carter, an engineer and digital fabrication artist exploring the intersection of technology, design, and generative art.
		 </p>   
		  <p>  My background is in engineering science, where I focus on digital fabrication technologies like CNC machining, 3D printing, and laser cutting. Over time, I became fascinated with how code and algorithms can generate complex visual structures that would be difficult to design by hand.

		Today my work explores generative systems, computational design, and fabrication processes that transform digital ideas into physical objects. </p>
	</div>
</div>
</main>

<style>

main{
    background-color: black;
}

.content {
	display: flex;
	gap: 2rem;
	align-items: flex-start;
	margin: 1rem 4rem 0rem 4rem;
}

.portrait {
	width: 300px;
	height: auto;
	border-radius: 8px;
	flex-shrink: 0;
}

.text {
	flex: 1;
}

p {
	color: aliceblue;
	justify-content: center;
	margin: 0 0 1rem 0;
	font-size: 1.5rem;
}


@media (max-width: 768px) {
	.content {
		flex-direction: column;
		align-items: center;
		margin: 1rem 2rem;
	}

	.portrait {
		width: 250px;
	}
}

@media (max-width: 430px) {
	p {
		font-size: 1rem;
	}
}

</style>