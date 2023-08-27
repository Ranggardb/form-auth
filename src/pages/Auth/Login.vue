<template>
  <main
    class="main w-full min-h-screen overflow-hidden bg-theme-orange flex justify-center items-center p-4 md:p-5"
  >
    <div
      class="box relative bg-white rounded-lg shadow-lg shadow-theme-maroon/30 w-full overflow-hidden md:max-w-xl lg:max-w-5xl lg:h-[90vh] lg:max-h-[640px]"
    >
      <div
        class="inner-box p-4 md:transform-none md:static md:p-8 lg:absolute lg:w-[95%] lg:h-[95%] lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2"
      >
        <div
          class="forms-wrap top-0 grid grid-cols-[1fr] grid-rows-[1fr] duration-[800ms] ease-in-out md:w-full lg:absolute lg:h-full lg:w-[45%]"
          :class="[signUpMode ? 'left-[55%]' : 'left-0']"
        >
          <form
            @submit.prevent="handleSubmit"
            class="form sign-in-form w-full mx-auto h-full p-4 flex flex-col justify-evenly transition duration-500 md:pt-6 md:px-10 md:pb-8 lg:max-w-[260px] lg:p-0 lg:delay-[300ms] lg:duration-[20ms]"
            :class="[
              signUpMode
                ? 'opacity-0 pointer-events-none -translate-x-full'
                : '',
            ]"
          >
            <div class="logo flex items-center">
              <img class="w-12 mr-2" :src="logo" alt="logo" />
              <h4 class="text-lg font-semibold">Form Auth</h4>
            </div>

            <div class="heading my-8">
              <h2 class="text-4xl font-semibold">Welcome Back</h2>
              <h6 class="text-theme-orange text-xs inline">
                Not registred yet?
              </h6>
              <a
                href="#"
                class="toggle text-sm font-semibold transition duration-300 hover:text-theme-maroon"
                @click="toggleSignUpMode"
                >Sign up</a
              >
            </div>

            <div class="actual-form md:mb-20">
              <AppInput name="signin-username" label="username" />
              <AppInput name="signin-password" label="password" />
              <AppButton class="w-full rounded-md" text="sign in" />

              <p class="text-xs mt-2 capitalize flex justify-end">
                <AppLink class="font-semibold" text="forgot password?" />
              </p>
            </div>
          </form>
          <form
            @submit.prevent="handleSubmit"
            class="form sign-up-form w-full mx-auto h-full p-4 flex flex-col justify-evenly transition duration-500 md:pt-6 md:px-10 md:pb-8 lg:max-w-[260px] lg:p-0 lg:delay-[300ms] lg:duration-[20ms]"
            :class="[
              signUpMode
                ? 'opacity-100 pointer-events-auto translate-x-0'
                : 'opacity-0 pointer-events-none translate-x-full',
            ]"
          >
            <div class="logo flex items-center">
              <img class="w-12 mr-2" :src="logo" alt="logo" />
              <h4 class="text-lg font-semibold">Form Auth</h4>
            </div>

            <div class="heading my-8">
              <h2 class="text-4xl font-semibold">Get Started</h2>

              <h6 class="text-theme-orange text-xs inline">
                Already have an account?
              </h6>
              <a
                href="#"
                class="toggle text-sm font-semibold transition duration-300 hover:text-theme-maroon"
                @click="toggleSignUpMode"
                >Sign in</a
              >
            </div>

            <div class="actual-form md:mb-20">
              <AppInput name="signup-username" label="username" />
              <AppInput name="signup-email" label="email" />
              <AppInput name="signup-password" label="password" />

              <AppButton class="w-full rounded-md" text="sign up" />

              <p class="text-xs mt-3">
                I agree to the
                <AppLink class="font-semibold" text="Terms of Services" />
                and
                <AppLink class="font-semibold" text="Privacy Policy" />
              </p>
            </div>
          </form>
        </div>

        <div
          class="carousel top-0 bg-theme-cream shadow-md shadow-black/30 rounded-lg duration-[800ms] ease-in-out p-5 md:flex md:justify-center md:w-full md:py-8 md:px-12 lg:absolute lg:grid lg:h-full lg:w-[55%] lg:p-0"
          :class="[signUpMode ? 'left-[0%]' : 'left-[45%]']"
        >
          <div
            class="images-wrapper w-full hidden md:hidden lg:grid lg:grid-cols-[1fr] lg:grid-rows-[1fr]"
          >
            <img
              v-for="(item, index) in carouselItems"
              :key="index"
              :src="item.image"
              :alt="item.content"
              class="image opacity-0 pointer-events-none w-full duration-500"
              :class="[
                currentSlideIndex === index ? 'opacity-100 transform-none' : '',
                index === 1 ? '-translate-y-12' : '',
                index === 2 ? 'scale-x-50 scale-y-75' : '',
                index === 4 ? 'scale-50 rotate-12' : '',
              ]"
            />
          </div>

          <div
            class="text-slider relative flex flex-col justify-center items-center"
          >
            <div class="text-wrap max-h-[2rem] overflow-hidden mb-4 md:mb-5">
              <div
                class="text-group flex flex-col text-center duration-500"
                :style="{
                  transform: `translateY(-${currentSlideIndex * 2}rem)`,
                }"
              >
                <h2
                  v-for="(item, index) in carouselItems"
                  :key="index"
                  class="opacit-0 text-2xl font-semibold duration-300"
                  :class="[currentSlideIndex === index ? 'opacit-100' : '']"
                >
                  {{ item.content }}
                </h2>
              </div>
            </div>

            <div class="bullets flex justify-center gap-3">
              <div
                v-for="(image, index) in carouselItems"
                :key="index"
                class="h-2 w-2 rounded-full cursor-pointer duration-300"
                :class="[
                  currentSlideIndex === index
                    ? 'w-4 bg-black'
                    : 'bg-theme-maroon',
                ]"
                @click="moveSlider(index)"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import logo from '../../assets/image/logo.png';
import eatTogether from '../../assets/image/eating_together.png';
import pizzaSharing from '../../assets/image/pizza_sharing.png';
import snack from '../../assets/image/snack.png';
import iceCream from '../../assets/image/ice_cream.png';
import streetFood from '../../assets/image/street_food.png';

import AppButton from '../../components/Atoms/AppButton.vue';
import AppInput from '../../components/Atoms/AppInput.vue';
import AppLink from '../../components/Atoms/AppLink.vue';
import AppCard from '../../components/Molecules/AppCard.vue';

export default {
  components: { AppCard, AppInput, AppButton, AppLink },
  data() {
    return {
      signUpMode: false,
      logo: logo,
      carouselItems: [
        {
          id: 1,
          image: eatTogether,
          content: 'Eat Togather',
        },
        {
          id: 2,
          image: pizzaSharing,
          content: 'Pizza Sharing',
        },
        {
          id: 3,
          image: snack,
          content: 'Snack',
        },
        {
          id: 4,
          image: iceCream,
          content: 'Ice Cream',
        },
        {
          id: 5,
          image: streetFood,
          content: 'Street Food',
        },
      ],
      currentSlideIndex: 0,
    };
  },
  computed: {
    sliderInterval() {
      return setInterval(this.nextSlide, 5000);
    },
  },
  methods: {
    toggleSignUpMode() {
      this.signUpMode = !this.signUpMode;
    },
    moveSlider(index) {
      this.currentSlideIndex = index;
    },
    nextSlide() {
      this.currentSlideIndex === this.carouselItems.length - 1
        ? (this.currentSlideIndex = 0)
        : (this.currentSlideIndex += 1);
    },
    autoSlide() {
      this.sliderInterval;
    },
    handleSubmit() {},
  },
  mounted() {
    this.autoSlide();
  },
};
</script>

<style scoped>
.form {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
.image {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
.carousel {
  grid-template-rows: auto 1fr;
}
</style>
