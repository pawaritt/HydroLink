def pres2alt(pressure):
    '''
    Determine altitude from site pressure.
    Parameters
    ----------
    pressure : numeric
        Atmospheric pressure. [Pa]
    Returns
    -------
    altitude : numeric
        Altitude above sea level. [m]
    '''
    pressure *= 100
    alt = 44331.5 - 4946.62 * pressure ** (0.190263)
    return alt

print(pres2alt(1010))