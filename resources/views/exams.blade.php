<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{env('APP_NAME')}} | Exams</title>
    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('css/app.css') }}" />
</head>

<body>
    @include('static.navbar')
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20">
                <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                    List of all the exams we currently support 🎉🎉
                </h1>
            </div>
            <div class="max-w-screen-xl mx-auto">
                @forelse($exams as $key => $exam)
                <div class="rounded-md p-3 mt-3 bg-purple-50">
                    <h2 class="text-purple-600 text-3xl title-font font-bold p-4">{{$exam->name}}</h2>
                    <div class="flex flex-wrap">
                        @forelse($exam->subjects as $key => $subject)
                        <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div
                                class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-purple-600 mb-5 flex-shrink-0">
                                @if($key%3 == 0)
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                                @elseif($key%3 == 1)
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                                @else
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                @endif

                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">{{$subject->name}}</h2>
                                <p class="leading-relaxed text-base">{{$subject->desc}}</p>
                                <a href="{{ url('exam/' . $exam->id . '/subjects/' . $subject->id ) }}"
                                    class="mt-3 text-purple-600 inline-flex items-center">View Topics
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        @empty
                        <h1 class="text-sm font-medium title-font text-gray-400 text-center w-full my-4">
                            No subjects were found for this exam :(
                        </h1>
                        @endforelse
                    </div>
                    <a class="d-block" href="{{ url('exam/' . $exam->id ) }}">
                        <button
                            class="flex mx-auto mt-2 bg-purple-100 text-purple-600 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 hover:text-white rounded-md">
                            More Subjects
                        </button>
                    </a>
                </div>
                @empty
                <h1 class="text-2xl font-medium title-font text-gray-400 text-center w-full mb-4">
                    No subjects were found for this exam :(
                </h1>
                @endforelse
            </div>
        </div>
    </section>
    @include('static.footer');
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.0/dist/alpine.min.js" defer></script>
</body>

</html>