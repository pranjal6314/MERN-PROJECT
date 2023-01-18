#include <bits/stdc++.h>
#define int long long

using namespace std;
int y2 = 1e9 + 7;
int sum = 0;
vector<int> p(1e6);

void solvekrnedebabab()
{
    int national;
    map<int, int> machhhap;
    cin >> national;
    map<int, int> machhhap1;
    vector<int> vkant(national);

    for (int i = 0; i < national; i++)
    {
        cin >> vkant[i];
        machhhap1[vkant[i]]++;
    }
    vector<int> vkant2(national + 1, 0);

    for (int i = national - 1; i >= 0; i--)
    {
        vkant2[i] = vkant2[i + 1];
        vkant2[i] = vkant2[i] + machhhap1[vkant[i] + 1];
        vkant2[i] = vkant2[i] - machhhap[vkant[i] - 1];
        machhhap1[vkant[i]]--;
        machhhap[vkant[i]]++;
    }
    int anschahiye = 0;
    for (int i = 0; i < national; i++)
    {
        anschahiye = max(anschahiye, vkant2[i]);
    }
    int solution = anschahiye * 2;
    solution = solution + machhhap[0];

    cout << anschahiye;
}

signed main()
{
    int t = 1;
    cin >> t;
    for (int i = 0; i < t; i++)
    {
        solvekrnedebabab();
        cout << "\n";
    }
    return 0;
}