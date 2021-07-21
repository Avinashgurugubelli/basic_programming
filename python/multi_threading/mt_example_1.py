import time
import threading


def do_something(sleep_time=1):
    print(f'sleeping for {sleep_time} second....')
    time.sleep(sleep_time)
    print('Done sleeping...')


def call_fn_in_sync_way():
    start_time = time.perf_counter()
    do_something()
    do_something()
    do_something()
    end_time = time.perf_counter()
    actual_time = round(end_time - start_time, 2)
    print(f'Program executed in {actual_time} second(s)')


def call_fun_using_threads():
    start_time = time.perf_counter()
    threads = []

    # # Thread creation
    # t1 = threading.Thread(target=do_something, args=[1.5])
    # t2 = threading.Thread(target=do_something, args=[1.5])
    # t3 = threading.Thread(target=do_something, args=[1.5])

    # # Starting thread
    # t1.start()
    # t2.start()
    # t3.start()

    # t1.join()
    # t2.join()
    # t3.join()

    sleep_times = [1, 1.5, 2, 2.5, 3]
    for i in sleep_times:
        t = threading.Thread(target=do_something, args=[i])
        t.start()
        threads.append(t)

    for thread in threads:
        thread.join()

    end_time = time.perf_counter()
    actual_time = round(end_time - start_time, 2)
    print(f'Program executed in {actual_time} second(s)')


if __name__ == "__main__":
    """
    o/p:
    sleeping for 1 second....
    Done sleeping...
    sleeping for 1 second....
    Done sleeping...
    sleeping for 1 second....
    Done sleeping...
    Program executed in 3.03 second(s)
    """
    # call_fn_in_sync_way()

    call_fun_using_threads()
