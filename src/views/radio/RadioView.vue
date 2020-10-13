<template>
  <div id="radio-view">
    <!-- <wMianNavBar/> -->
    <!-- <div>电台</div> -->
    <Menu/>
    <BetterScroll class="content" ref="scroll">
      <ul>
        <li>dfsdf1</li>
        <li>dfsdf2</li>
        <li>dfsdf3</li>
        <li>dfsdf4</li>
        <li>dfsdf5</li>
        <li>dfsdf6</li>
        <li>dfsdf7</li>
        <li>dfsdf8</li>
        <li>dfsdf9</li>
        <li>dfsdf10</li>
        <li>dfsdf11</li>
        <li>dfsdf12</li>
        <li>dfsdf13</li>
        <li>dfsdf14</li>
        <li>dfsdf15</li>
        <li>dfsdf16</li>
        <li>dfsdf17</li>
        <li>dfsdf18</li>
        <li>dfsdf19</li>
        <li>dfsdf20</li>
        <li>dfsdf21</li>
        <li>dfsdf22</li>
        <li>dfsdf23</li>
        <li>dfsdf24</li>
        <li>dfsdf25</li>
        <li>dfsdf26</li>
        <li>dfsdf27</li>
        <li>dfsdf28</li>
        <li>dfsdf29</li>
        <li>dfsdf30</li>
        <li>dfsdf31</li>
        <li>dfsdf32</li>
        <li>dfsdf33</li>
        <li>dfsdf34</li>
        <li>dfsdf35</li>
        <li>dfsdf36</li>
        <li>dfsdf37</li>
        <li>dfsdf38</li>
        <li>dfsdf39</li>
        <li>dfsdf40</li>
        <li>dfsdf41</li>
        <li>dfsdf42</li>
        <li>dfsdf43</li>
        <li>dfsdf44</li>
        <li>dfsdf45</li>
        <li>dfsdf46</li>
        <li>dfsdf47</li>
        <li>dfsdf48</li>
        <li>dfsdf49</li>
        <li>dfsdf50</li>
      </ul>
    </BetterScroll>
  </div>
</template>
<script>
import BetterScroll from '@/components/betterscroll/BetterScroll'
import Menu from '@/components/navmenu/Menu'
export default {
  name:'RadioView',
  data() {
    return{}
  },
  components: {
    BetterScroll,
     Menu
  }
}
</script>
<style scoped>
  #radio-view {
    height: calc(100vh - 88px);
  }
  .content {
    height: 100%;
    overflow: hidden;
    position: relative;
    /* top: 44px; */
    /* bottom: 44px; */
  }
</style>