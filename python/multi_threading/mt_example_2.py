"""
new way
from python 3.2
"""
import time
import concurrent.futures


def do_something(sleep_time=1):
    thread_name = f"thread-{sleep_time}"
    print(f'sleeping the thread {thread_name} for {sleep_time} second....')
    time.sleep(sleep_time)
    return f'{thread_name} Done sleeping...'


def multi_threading_using_context():
    with concurrent.futures.ThreadPoolExecutor() as executor:
        start = time.perf_counter()

        t1 = executor.submit(do_something, 1)
        t2 = executor.submit(do_something, 2)

        print(t1.result())
        print(t2.result())

        end = time.perf_counter()
        print(f'executed in {round(end - start, 2)} second(s)')


def multi_threading_using_loops():
    start = time.perf_counter()

    sleep_seconds = [5, 4, 3, 2, 1]
    with concurrent.futures.ThreadPoolExecutor() as executor:
        futures = [executor.submit(do_something, sec) for sec in sleep_seconds]

        # for f in futures:
        #     print(f.result())

        for f in concurrent.futures.as_completed(futures):
            print(f.result())


    end = time.perf_counter()
    print(f'executed in {round(end - start, 2)} second(s)')


def multi_threading_using_map():
    start = time.perf_counter()

    sleep_seconds = [5, 4, 3, 2, 1]
    with concurrent.futures.ThreadPoolExecutor() as executor:
        results = executor.map(do_something, sleep_seconds)

        for result in results:
            print(result)

    end = time.perf_counter()
    print(f'executed in {round(end - start, 2)} second(s)')


if __name__ == "__main__":
    """
    O/P:

    sleeping the thread thread-1 for 1 second....
    sleeping the thread thread-2 for 2 second....
    thread-1 Done sleeping...
    thread-2 Done sleeping...
    executed in 2.01 second(s)
    """
    # multi_threading_using_context()

    """
    sleeping the thread thread-5 for 5 second....
    sleeping the thread thread-4 for 4 second....
    sleeping the thread thread-3 for 3 second....
    sleeping the thread thread-2 for 2 second....
    sleeping the thread thread-1 for 1 second....
    thread-1 Done sleeping...
    thread-2 Done sleeping...
    thread-3 Done sleeping...
    thread-4 Done sleeping...
    thread-5 Done sleeping...
    """
    # multi_threading_using_loops()


    multi_threading_using_map()


