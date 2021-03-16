<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{env('APP_NAME')}} | {{$subject->name}}</title>
    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('css/app.css') }}" />
</head>

<body>
    @include('static.navbar')
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20">
                <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                    {{$subject->name}}
                    <!-- {{Str::slug("XML")}} -->
                </h1>
                <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                    {{$subject->desc}}
                </p>
                <div class="flex mt-6 justify-center">
                    <div class="w-16 h-1 rounded-full bg-purple-600 inline-flex"></div>
                </div>
            </div>

            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                @forelse($subject->topics as $key => $topic)
                <a href="{{ url('exam/' . $exam . '/subjects/' . $subject->id . '/topics/' . $topic->id ) }}"
                    class="group p-2 sm:w-1/2 w-full">
                    <div class="group-hover:shadow-lg bg-gray-100 rounded flex p-4 h-full items-center">
                        <div class="flex flex-col items-center pr-4 font-mono text-6xl text-purple-600">
                            <!-- @if($topic->progress == 1)
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="3" class="text-purple-600 w-16 h-16 flex-shrink-0" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            @else
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="3" class="text-purple-600 w-16 h-16 flex-shrink-0" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            </svg>
                            @endif -->
                            {{$key+1}}
                            <!-- <span>{{ $topic->progress * 100 }}%</span> -->
                        </div>
                        <div>
                            <p class="title-font font-medium group-hover:text-purple-600">{{$topic->name}}</p>
                            <span class="ext-base leading-relaxed text-gray-500s">{{$topic->desc}}</span>
                        </div>
                    </div>
                </a>
                @empty
                <h1 class="text-2xl font-medium title-font text-gray-400 text-center w-full mb-4">
                    No topics were found for this subject :(
                </h1>
                @endforelse
            </div>
            <!-- <button
                class="flex mx-auto mt-16 text-white bg-purple-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">More</button> -->
        </div>
    </section>
    @include('static.footer');
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.0/dist/alpine.min.js" defer></script>
</body>

</html>