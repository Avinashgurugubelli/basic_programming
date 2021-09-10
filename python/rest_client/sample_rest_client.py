import requests
from requests.exceptions import HTTPError


class SampleRestClient:

    def __init__(self) -> None:
        self.base_url = 'http://localhost:6111/api/v1/employees_controller'

    def get_all_employees(self):
        try:
            response = requests.get(self.base_url)
            response.raise_for_status()
            data = response.json()
            print(type(response.text))
            # if response.status_code == 200:
            #     print("Employee details fetched")
            #     # print(response.text())
            #     print(response.json())
            #     # print(response.content())
            # else:
            #     print("Some error occurred")
        except HTTPError as http_err:
            print(f'HTTP error occurred: {http_err}')
        except Exception as err:
            print(f'Other error occurred: {err}')
        finally:
            print("Finally called")


if __name__ == "__main__":
    src = SampleRestClient()

    src.get_all_employees()
