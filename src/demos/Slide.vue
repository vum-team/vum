<template>
  <div class="page">
    <simple-header title="Slide" :back-link="true"></simple-header>
    <page-content>
      <slide-wrapper>
        <slide><img src="../assets/images/slide/0.jpg" /></slide>
        <slide><img src="../assets/images/slide/1.jpg" /></slide>
        <slide><img src="../assets/images/slide/2.jpg" /></slide>
        <slide><img src="../assets/images/slide/3.jpg" /></slide>
      </slide-wrapper>
    </page-content>
  </div>
</template>

<script>
import Content from '../components/content'
import { SimpleHeader } from '../components/header'
import { SlideWrapper, Slide } from '../components/slide'

export default {
  components: {
    'page-content': Content,
    SimpleHeader,
    SlideWrapper,
    Slide
  }
}
</script>
