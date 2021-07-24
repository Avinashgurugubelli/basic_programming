import concurrent.futures

import time


def do_something(sleep_time=1):
    thread_name = f"thread-{sleep_time}"
    print(f'sleeping the thread {thread_name} for {sleep_time} second....')
    time.sleep(sleep_time)
    return f'{thread_name} Done sleeping...'

def run_using_context_executor():
    start_time = time.perf_counter()
    with concurrent.futures.ProcessPoolExecutor() as executor:
        secs = [5, 4, 3, 2, 1]
        results = executor.map(do_something, secs)
        for result in results:
            print(result)
    end_time = time.perf_counter()
    actual_time = round(end_time - start_time, 2)
    print(f'Program executed in {actual_time} second(s)')


if __name__ == "__main__":
    run_using_context_executor()



