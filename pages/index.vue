<template>
  <TitleBar title="home" />
  <div class="intro-container">
    <ClientOnly>
      <MiniMe />
    </ClientOnly>
  </div>

  <ProseH2 :id="'meow'">meow</ProseH2>
  <ProseP>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et
    tortor consequat id porta. Ac auctor augue mauris augue neque gravida. Et
    egestas quis ipsum suspendisse ultrices gravida dictum fusce. Libero id
    faucibus nisl tincidunt eget. Vestibulum lorem sed risus ultricies tristique
    nulla aliquet enim tortor. Egestas quis ipsum suspendisse ultrices gravida
    dictum fusce ut. In ante metus dictum at tempor commodo ullamcorper a. Nisi
    porta lorem mollis aliquam ut porttitor leo. Vitae purus faucibus ornare
    suspendisse sed nisi. Maecenas sed enim ut sem viverra aliquet eget sit.
    Elementum sagittis vitae et leo duis. Fringilla phasellus faucibus
    scelerisque eleifend. Non consectetur a erat nam at lectus. Eget nunc
    lobortis mattis aliquam faucibus purus in massa. Enim sed faucibus turpis in
    eu mi bibendum neque. Eu mi bibendum neque egestas congue. Vulputate mi sit
    amet mauris commodo quis imperdiet. Eu lobortis elementum nibh tellus
    molestie. Arcu cursus vitae congue mauris rhoncus aenean vel. Senectus et
    netus et malesuada. Morbi tincidunt ornare massa eget egestas purus viverra
    accumsan in. Libero justo laoreet sit amet cursus sit. Cursus mattis
    molestie a iaculis at erat. Facilisis volutpat est velit egestas dui id
    ornare arcu. Fermentum iaculis eu non diam. Aliquam purus sit amet luctus.
    Praesent tristique magna sit amet purus gravida quis. Sit amet nisl suscipit
    adipiscing. Tellus id interdum velit laoreet id donec ultrices tincidunt.
    Nisi porta lorem mollis aliquam ut porttitor leo a. Nibh tellus molestie
    nunc non blandit massa enim nec dui. Habitasse platea dictumst quisque
    sagittis purus sit amet volutpat consequat. Arcu cursus vitae congue mauris.
    Sagittis eu volutpat odio facilisis mauris sit amet massa. Sit amet justo
    donec enim diam vulputate ut. Ut diam quam nulla porttitor massa id neque
    aliquam vestibulum. Vel eros donec ac odio tempor orci dapibus. Vitae sapien
    pellentesque habitant morbi tristique senectus et netus. Scelerisque viverra
    mauris in aliquam. Condimentum mattis pellentesque id nibh tortor id
    aliquet. Sit amet purus gravida quis blandit turpis. Ac odio tempor orci
    dapibus ultrices in iaculis nunc. Diam sit amet nisl suscipit. Turpis cursus
    in hac habitasse. Amet nisl suscipit adipiscing bibendum est. Enim diam
    vulputate ut pharetra sit amet. Venenatis lectus magna fringilla urna
    porttitor rhoncus dolor. Bibendum at varius vel pharetra vel turpis. Pretium
    vulputate sapien nec sagittis aliquam malesuada bibendum. Morbi blandit
    cursus risus at. Amet cursus sit amet dictum sit amet justo donec enim. Ante
    metus dictum at tempor commodo ullamcorper a. Massa vitae tortor condimentum
    lacinia. Non odio euismod lacinia at quis risus sed. Tristique senectus et
    netus et malesuada. Enim ut tellus elementum sagittis vitae et leo duis.
    Tristique nulla aliquet enim tortor at. Urna cursus eget nunc scelerisque
    viverra mauris in. Odio facilisis mauris sit amet massa vitae tortor.
    Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.
    Aliquam sem et tortor consequat. Duis ut diam quam nulla porttitor massa id
    neque aliquam. Lobortis elementum nibh tellus molestie nunc non blandit
    massa. Nibh mauris cursus mattis molestie a. Leo a diam sollicitudin tempor
    id eu nisl nunc mi. Odio eu feugiat pretium nibh ipsum. Convallis aenean et
    tortor at risus viverra adipiscing. Dui vivamus arcu felis bibendum ut
    tristique. Porttitor massa id neque aliquam vestibulum morbi blandit cursus
    risus. Tincidunt tortor aliquam nulla facilisi cras. Tristique risus nec
    feugiat in fermentum posuere urna nec tincidunt. Ultricies integer quis
    auctor elit sed vulputate mi sit. Netus et malesuada fames ac. Lectus nulla
    at volutpat diam ut venenatis tellus. Amet purus gravida quis blandit turpis
    cursus. Integer malesuada nunc vel risus commodo viverra. Tempus quam
    pellentesque nec nam. Purus faucibus ornare suspendisse sed nisi lacus.
  </ProseP>
</template>

<script setup lang="ts">
useHead({
  title: "zoe bat website",
});

definePageMeta({ documentDriven: false });
</script>

<style scoped lang="scss">
.intro-container {
  width: 100%;
  height: calc(100% * calc(2 / 3));
  scroll-behavior: auto;
}

.overlay {
  position: absolute;
}
</style>
