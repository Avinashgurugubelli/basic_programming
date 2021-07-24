
import time
import multiprocessing

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

def call_do_some_thing_in_multi_process():
    start_time = time.perf_counter()

    # process creation 
    p1 = multiprocessing.Process(target=do_something, args=[10])
    p2 = multiprocessing.Process(target=do_something, args=[20])

    p1.start()
    p2.start()

    p1.join()
    p2.join()

    end_time = time.perf_counter()
    actual_time = round(end_time - start_time, 2)
    print(f'Program executed in {actual_time} second(s)')




if __name__ == "__main__":
    # call_fn_in_sync_way()
    call_do_some_thing_in_multi_process()
