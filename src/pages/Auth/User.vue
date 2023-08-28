<template>
  <div>
    <Navbar class="px-10 ml-auto" />
    <div class="p-10 min-h-screen">
      <div class="flex items-center gap-3">
        <img
          class="bg-theme-cream rounded-full w-12 h-12"
          :src="generateAvatar('name')"
          alt=""
        />
        <div class="px-4 sm:px-0">
          <h3 class="text-base font-semibold leading-7 text-gray-900">
            User Information
          </h3>
          <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Personal details and application.
          </p>
        </div>
      </div>

      <div class="mt-6 border-t border-gray-200">
        <dl class="divide-y divide-gray-200">
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">
              Full name
            </dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
            >
              Margot Foster
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">
              Application for
            </dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
            >
              Backend Developer
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">
              Email address
            </dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
            >
              margotfoster@example.com
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">
              Salary expectation
            </dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
            >
              $120,000
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">About</dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
            >
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
              incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
              consequat sint. Sit id mollit nulla mollit nostrud in ea officia
              proident. Irure nostrud pariatur mollit ad adipisicing
              reprehenderit deserunt qui eu.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/Templaes/Navbar.vue';

export default {
  methods: {
    generateAvatar(name, type = 1) {
      return `https://robohash.org/${name}?set=set${type}`;
    },
  },
  components: { Navbar },
};
</script>

<style scoped></style>
