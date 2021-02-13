<template>
	<div class="lg:flex">
		<div class="lg:w-1/2 xl:max-w-screen-sm p-3">
			<div class="mt-10 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
				<h2
					class="text-center text-4xl text-purple-600 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold"
				>
					Sign up
				</h2>
				<div class="mt-12">
					<Form ref="signupform" @submit="onSubmit" v-slot="{ errors }">
						<!-- <Field name="field" :rules="isRequired" /> -->

						<div>
							<label
								:class="!errors.name ? 'text-gray-700' : 'text-red-600'"
								class="text-sm font-bold tracking-wide"
								>Full Name</label
							>

							<Field
								class="w-full text-lg py-2 border-b focus:outline-none"
								:class="
									!errors.name
										? 'border-gray-300 focus:border-indigo-500'
										: 'border-red-600 focus:border-red-600'
								"
								name="name"
								:rules="isRequired"
								autocomplete
								v-model="name"
								placeholder="Jhon Doe"
							/>

							<span class="text-xs text-red-600">{{ errors.name }}</span>
						</div>
						<div class="mt-8">
							<label
								:class="!errors.role ? 'text-gray-700' : 'text-red-600'"
								class="text-sm font-bold tracking-wide"
								>Account Type</label
							>
							<v-select
								:options="roles"
								class="w-full text-lg py-2 border-0 border-b focus:outline-none style-chooser"
								:class="
									!errors.role
										? 'border-gray-300 focus:border-indigo-500'
										: 'border-red-600 focus:border-red-600'
								"
								v-model="role"
								placeholder="Select"
							/>
						</div>
						<div class="mt-8">
							<label
								:class="!errors.email ? 'text-gray-700' : 'text-red-600'"
								class="text-sm font-bold tracking-wide"
								>Email Address</label
							>

							<Field
								class="w-full text-lg py-2 border-b focus:outline-none"
								:class="
									!errors.email
										? 'border-gray-300 focus:border-indigo-500'
										: 'border-red-600 focus:border-red-600'
								"
								name="email"
								:rules="validateEmail"
								:validateOnInput="true"
								autocomplete="off"
								v-model="email"
								placeholder="mike@gmail.com"
							/>

							<span class="text-xs text-red-600" v-html="Array.isArray(errors.email) ? errors.email.join('<br> ') : errors.email"></span>
						</div>
						<div class="mt-8">
							<label
								:class="!errors.password ? 'text-gray-700' : 'text-red-600'"
								class="text-sm font-bold tracking-wide"
							>
								Password
							</label>
							<div class="relative flex items-center">
								<Field
									class="w-full text-lg py-2 border-b focus:outline-none"
									:class="
										!errors.password
											? 'border-gray-300 focus:border-indigo-500'
											: 'border-red-600 focus:border-red-600'
									"
									name="password"
									:type="show ? 'text' : 'password'"
									:rules="validatePassword"
									:validateOnInput="true"
									autocomplete="new-password"
									v-model="password"
									placeholder="Password"
								/>

								<svg
									v-if="show"
									@click="show = !show"
									class="w-6 cursor-pointer absolute right-1"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
									/>
								</svg>
								<svg
									v-else
									@click="show = !show"
									class="w-6 cursor-pointer absolute right-1"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
									/>
								</svg>
							</div>
							<span class="text-xs text-red-600" v-html="Array.isArray(errors.password) ? errors.password.join('<br> ') : errors.password"></span>
						</div>

						<div class="mt-8">
							<label
								:class="!errors.confirm_password ? 'text-gray-700' : 'text-red-600'"
								class="text-sm font-bold tracking-wide"
							>
								Confirm Password
							</label>
							<Field
								class="w-full text-lg py-2 border-b focus:outline-none"
								:class="
									!errors.confirm_password
										? 'border-gray-300 focus:border-indigo-500'
										: 'border-red-600 focus:border-red-600'
								"
								name="confirm_password"
								type="password"
                                v-model="cp"
								:rules="confirmPassword"
								:validateOnInput="true"
								autocomplete="off"
								placeholder="Confirm Password"
							/>

							<span class="text-xs text-red-600">{{ errors.confirm_password }}</span>
						</div>

						<div class="mt-10">
							<button
								type="submit"
								class="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg"
							>
								Signup
							</button>
						</div>
					</Form>
					<div
						class="mt-12 text-sm font-display font-semibold text-gray-700 text-center"
					>
						Have an account already ?
						<router-link
							to="/login"
							class="cursor-pointer text-indigo-600 hover:text-indigo-800"
							>Login here</router-link
						>
					</div>
				</div>
			</div>
		</div>
		<div class="hidden lg:flex items-center justify-center bg-indigo-100 flex-1">
			<div class="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
				<svg
					class="w-5/6 mx-auto"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 528.71721 699.76785"
				>
					<rect y="17.06342" width="444" height="657" fill="#535461" />
					<polygon
						points="323 691.063 0 674.063 0 17.063 323 0.063 323 691.063"
						fill="#7f9cf5"
					/>
					<circle cx="296" cy="377.06342" r="4" fill="#535461" />
					<polygon
						points="296 377.66 298.773 382.463 301.545 387.265 296 387.265 290.455 387.265 293.227 382.463 296 377.66"
						fill="#535461"
					/>
					<polygon
						points="337 691.063 317.217 691 318 0.063 337 0.063 337 691.063"
						fill="#7f9cf5"
					/>
					<g opacity="0.1">
						<polygon
							points="337.217 691 317.217 691 318.217 0 337.217 0 337.217 691"
							fill="#fff"
						/>
					</g>
					<circle cx="296" cy="348.06342" r="13" opacity="0.1" />
					<circle cx="296" cy="346.06342" r="13" fill="#535461" />
					<line
						x1="52.81943"
						y1="16.10799"
						x2="52.81943"
						y2="677.15616"
						fill="none"
						stroke="#000"
						stroke-miterlimit="10"
						stroke-width="2"
						opacity="0.1"
					/>
					<line
						x1="109.81943"
						y1="12.10799"
						x2="109.81943"
						y2="679.15616"
						fill="none"
						stroke="#000"
						stroke-miterlimit="10"
						stroke-width="2"
						opacity="0.1"
					/>
					<line
						x1="166.81943"
						y1="9.10799"
						x2="166.81943"
						y2="683"
						fill="none"
						stroke="#000"
						stroke-miterlimit="10"
						stroke-width="2"
						opacity="0.1"
					/>
					<line
						x1="223.81943"
						y1="6.10799"
						x2="223.81943"
						y2="687.15616"
						fill="none"
						stroke="#000"
						stroke-miterlimit="10"
						stroke-width="2"
						opacity="0.1"
					/>
					<line
						x1="280.81943"
						y1="3.10799"
						x2="280.81943"
						y2="688"
						fill="none"
						stroke="#000"
						stroke-miterlimit="10"
						stroke-width="2"
						opacity="0.1"
					/>
					<ellipse cx="463.21721" cy="95.32341" rx="39.5" ry="37" fill="#2f2e41" />
					<path
						d="M683.8586,425.93948l-10,14s-48,10-30,25,44-14,44-14l14-18Z"
						transform="translate(-335.6414 -100.11607)"
						fill="#ffb8b8"
					/>
					<path
						d="M735.8586,266.93948s-13,0-16,18-6,78-6,78-42,55-35,62,15,20,20,18,48-61,48-61Z"
						transform="translate(-335.6414 -100.11607)"
						fill="#7f9cf5"
					/>
					<path
						d="M735.8586,266.93948s-13,0-16,18-6,78-6,78-42,55-35,62,15,20,20,18,48-61,48-61Z"
						transform="translate(-335.6414 -100.11607)"
						opacity="0.1"
					/>
					<path
						d="M775.8586,215.93948s-1,39-13,41-8,15-8,15,39,23,65,0l5-12s-18-13-10-31Z"
						transform="translate(-335.6414 -100.11607)"
						fill="#ffb8b8"
					/>
					<path
						d="M708.8586,455.93948s-59,110-37,144,55,104,60,104,33-14,31-23-32-76-40-82-4-22-3-23,34-54,34-54-1,84,3,97-1,106,4,110,28,11,32,5,16-97,8-118l15-144Z"
						transform="translate(-335.6414 -100.11607)"
						fill="#2f2e41"
					/>
					<path
						d="M762.8586,722.93948l-25,46s-36,26-11,30,40-6,40-6l22-16v-46Z"
						transform="translate(-335.6414 -100.11607)"
						fill="#2f2e41"
					/>
					<path
						d="M728.8586,696.93948l13,31s5,13,0,16-19,21-10,23a29.29979,29.29979,0,0,0,5.49538.5463,55.56592,55.56592,0,0,0,40.39768-16.43936l8.10694-8.10694s-27.77007-63.94827-27.385-63.47414S728.8586,696.93948,728.8586,696.93948Z"
						transform="translate(-335.6414 -100.11607)"
						fill="#2f2e41"
					/>
					<circle cx="465.21721" cy="105.82341" r="34" fill="#ffb8b8" />
					<path
						d="M820.3586,253.43948l-10.5,10.5s-32,12-47,0c0,0,5.5-11.5,5.5-10.5s-43.5,7.5-47.5,25.5,3,49,3,49-28,132-17,135,114,28,113,9,8-97,8-97l35-67s-5-22-17-29S820.3586,253.43948,820.3586,253.43948Z"
						transform="translate(-335.6414 -100.11607)"
						fill="#7f9cf5"
					/>
					<path
						d="M775.8586,448.93948l-13,8s-50,34-24,40,41-24,41-24l10-12Z"
						transform="translate(-335.6414 -100.11607)"
						fill="#ffb8b8"
					/>
					<path
						d="M849.8586,301.93948l9,9s6,84-6,101-67,63-70,60-22-18-18-20,57.18287-57.56942,57.18287-57.56942l-4.18287-77.43058Z"
						transform="translate(-335.6414 -100.11607)"
						opacity="0.1"
					/>
					<path
						d="M853.8586,298.93948l9,9s6,84-6,101-67,63-70,60-22-18-18-20,57.18287-57.56942,57.18287-57.56942l-4.18287-77.43058Z"
						transform="translate(-335.6414 -100.11607)"
						fill="#7f9cf5"
					/>
					<path
						d="M786.797,157.64461s-11.5575-4.20273-27.31774,4.72807l8.40546,2.10136s-12.60819,1.05068-14.18421,17.8616h5.77875s-3.67739,14.70955,0,18.91228l2.364-4.4654,6.82943,13.65887,1.576-6.82944,3.15205,1.05069,2.10137-11.03217s5.25341,7.88012,9.45614,8.40546V195.2065s11.5575,13.13352,15.23489,12.60818l-5.25341-7.35477,7.35477,1.576-3.152-5.25341,18.91228,5.25341-4.20273-5.25341,13.13352,4.20273,6.3041,2.6267s8.9308-20.4883-3.67739-34.67251S798.61712,151.60318,786.797,157.64461Z"
						transform="translate(-335.6414 -100.11607)"
						fill="#2f2e41"
					/>
				</svg>
			</div>
		</div>
	</div>
</template>

<script>
import { Field, Form } from "vee-validate";
import vSelect from "vue-select/src/index";

export default {
	components: {
		Field,
		Form,
		vSelect,
	},
	data() {
		return {
			name: "Ahsan Zaman",
			role: "",
			email: "ahsan@ahsan-web.ml",
			password: "",
			cp: "",
			show: false,

			roles: ["Student", "Parent", "Teacher"],
		};
	},
	methods: {
		// Validator function
		isRequired(value) {
			return value ? true : "Email is required";
		},
		onSubmit() {
            if(this.role){
                // const { setErrors } = useForm()
                this.$http.post('/signup',{
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.cp,
                    role: this.role.toLowerCase(),
                })
                .then(() => {
                    this.$router.push('/login')
                })
                .catch(err => {
                    if(err.response.status == 422){
                        this.$refs.signupform.setErrors(err.response.data.errors)
                    }
                    this.bus.emit('toast',{
                        title: 'Error',
                        text: err.response.data.message,
                        type:'error'
                    })
                })

            }else{
                this.bus.emit('toast',{
                    title: 'Error',
                    text: 'Please select an account type',
                    type:'error'
                })

            }
            
		},
		validateEmail(value) {
			// if the field is empty
			if (!value) {
				return "Email is required";
			}
			// if the field is not a valid email
			if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
				return "Must be a valid email address";
			}
			// All is good
			return true;
		},
		validatePassword(value) {
			// if the field is empty
			if (!value) {
				return "Password is required";
			}
			// if the field is not a valid password
			if (value.length < 8) {
				return "Password must contain at least 8 characters";
			}
			if (value.search(/[0-9]/i) < 0) {
				return "Password must contain at least one digit";
			}
			if (value.search(/[a-zA-Z]/i) < 0) {
				return "Password must contain at least one character";
			}
			// All is good
			return true;
		},
		confirmPassword(value) {
			// if the field is empty
			if (!value) {
				return "Retype your password";
			}
			// if the field is not a valid password
			if (!(value == this.password)) {
				return "Passwords doesn't match";
			}
			// All is good
			return true;
		},
	},
};
</script>
<style lang="scss">
.vs__dropdown-toggle{
    border: 0px;
}
.style-chooser .vs__selected{
    background-color: #7c3aed;
    color: #fff;
}
</style>